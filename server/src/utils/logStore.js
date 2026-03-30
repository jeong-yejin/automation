const MAX_LOGS = 200

const logs = []

function addLog(entry) {
  logs.unshift({ ts: new Date().toISOString(), ...entry })
  if (logs.length > MAX_LOGS) logs.pop()
}

function getLogs() {
  return logs
}

module.exports = { addLog, getLogs }
