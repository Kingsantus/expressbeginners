express simple routing is a bit more easier than node routing

node use http module, which always start with createServer((req,res)=>{
    res.writeHead()
    res.end()
})

express uses a module named as express which to install = npm i express
import the module to your server page 
create app = express()
app will be the name you will use to route handle

app.get('/index.html, (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

the above code call express when a user type in localhost:3500/index.html
it takes in two parameter
res.sendFile is use to get and display the file referred to 
path.join function will get the __dirname which is the directory of the localhost, the 'views' folder name and the file "index.html" it more accurrate this way

dont forget to create a port, mine is created and assign 3500
and listner for the route

welcome again and read the file deeper