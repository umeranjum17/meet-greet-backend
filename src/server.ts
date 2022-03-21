import { PORT } from './Environment'
import { app } from './app'

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
