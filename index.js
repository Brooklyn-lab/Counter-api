import express from "express"

const PORT = process.env.PORT ?? 3000
const app = express()

const url = "https://developers.teachable.com/v1/courses"
const authorizationKey = "cXycM0ts1IRN7293bbH1M8F0NbhYRBsx"

app.get("/", async (req, res) => {
  try {
    const fetchOptions = {
      headers: {
        apiKey: authorizationKey,
      },
    }

    const fetchResponse = await fetch(url, fetchOptions)
    const courses = await fetchResponse.json()

    res.json({ courses })
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}...`)
})
