var esxpress = require('express')
var app = express()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.user(express.json())
app.use(express.urlencoded({extended})
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(3000, )