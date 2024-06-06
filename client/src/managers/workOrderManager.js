const _apiUrl = "/api/workorder"

export const getIncompleteWorkOrders = () => {
  return fetch(`${_apiUrl}/incomplete`).then((res) => res.json())
}

export const createWorkOrder = (wo) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wo),
  }).then((res) => res.json())
}

export const updateWorkOrder = (wo) => {
  return fetch(`${_apiUrl}/${wo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wo),
  })
}

export const closeWorkOrder = (wo) => {
  return fetch(`${_apiUrl}/close/${wo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wo),
  })
}
