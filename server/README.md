# Automation Backend (Notion -> X)

이 서비스는 Notion 데이터베이스의 페이지를 읽어서 조건을 만족하는 항목만 X에 이미지+텍스트로 게시한 뒤, 성공 시 Notion 페이지를 `Published`로 업데이트합니다.

## Folder Structure

```
server/
  src/
    config/
      index.js
    controllers/
      webhookController.js
    jobs/
      pollNotion.js
    routes/
      webhook.js
    services/
      notionService.js
      xService.js
      postComposer.js
      postProcessor.js
    utils/
      logger.js
      truncatePost.js
      notionHelpers.js
      downloadImage.js
    app.js
    server.js
  package.json
  .env.example
  README.md
```

## Environment Variables

`server/.env.example`를 기반으로 `server/.env`를 생성하세요.

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`
- `X_API_KEY`
- `X_API_SECRET`
- `X_ACCESS_TOKEN`
- `X_ACCESS_SECRET`
- `PORT`
- `POLL_INTERVAL_MS`
- `X_CHARACTER_LIMIT` (기본 280)

## Installation

```bash
cd server
npm install
```

## How to Run Locally

### Webhook mode (Express 서버)
```bash
npm run start
```
기동 후:
- `POST /webhook/notion`
- `GET /health`

### Polling mode (주기적으로 Notion 쿼리)
```bash
npm run poll
```
`POLL_INTERVAL_MS` 간격으로 실행되며, 한 페이지 실패가 전체 크래시로 이어지지 않도록 처리합니다.

## How Posting Eligibility Works

기본 조건:
- `Status`가 기본 eligible 상태 배열인 `["On hold"]` 중 하나일 때만 처리
- `Status`가 `Published`이면 스킵
- `X Post ID` 속성에 값이 이미 있으면 스킵

텍스트 구성:
- `Title + "\n\n" + Body` (Title과 Body가 모두 있을 때)
- 둘 중 하나만 있으면 그 값만 사용
- 둘 다 없으면 스킵(로그에 이유 기록)

## Notion Automation Webhook 연결

Notion Automation에서 Webhook 호출을 사용할 때, 백엔드로 아래와 같은 JSON을 POST 하도록 설정합니다.

```json
{
  "pageId": "notion-page-id"
}
```

백엔드는 해당 pageId를 Notion에서 다시 조회 후 처리합니다.

## Known Limitations / Notes

- Notion에 저장된 이미지 URL은 시간이 지나면 만료될 수 있으므로, X에 업로드 직전에 Notion 페이지를 한 번 더 “fresh refetch”합니다.
- X 게시 성공 후 Notion 업데이트 실패 시, Notion 상태는 `Published`로 변경되지 않습니다(재시도는 다음 polling/webhook에서 감지됩니다).
- Notion “Status”가 `status` 타입인지 `select` 타입인지에 따라 필터/업데이트가 다르게 동작할 수 있어, 코드에서 안전하게 지원합니다.

## Where to Later Add

- LLM 기반 텍스트 rewriting
- vision 기반 이미지 분석
- X 업로드 전 S3 업로드

