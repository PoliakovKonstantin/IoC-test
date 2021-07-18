const express=require('express')
const formData = require("express-form-data")
const PORT = process.env.PORT || 3001;
//const BooksRepository=require("./repository");
require("reflect-metadata")
const { injectable,inject,Container }=require("inversify");
const IoC=new Container()
/*IoC.bind(BooksRepository).toSelf()
IoC.bind<IBook>(BooksRepository).toSelf();*/
//console.log(IoC.get(BooksRepository).Hi())
const repository_1 = require("./repository");
IoC.bind(repository_1.BooksRepository).toSelf()
const BooksRepository=IoC.get(repository_1.BooksRepository)
console.log(BooksRepository.Hi())
//const redis=require('redis')
//const bodyParser = require("body-parser");
const app=express()
app.use(formData.parse())
//const bodyParser = require('body-parser')
//const STORAGE_URL=process.env.STORAGE_URL || 'localhost'
//const client=redis.createClient(`redis://${STORAGE_URL}`)
const fs=require('fs')
const router=express.Router()
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: true }))
const upload=require('./multer-test')
//let arr1=[]
class book{
    constructor(title,description,authors,favorite,fileCover,fileName,fileBook){  
        this.id=arr.length+1
        this.title= title,
        this.description= description,
        this.authors= authors,
        this.favorite= favorite,
        this.fileCover=fileCover,
        this.fileName=fileName,
        this.fileBook=fileBook
  }}
let {arr}=require('./repository')
let book1=new book(1,2,3,4,5,6,7)
//let id=book1.id 
//app.set('view engine', 'ejs')
arr.push(book1)
let book2=new book(8,9,5,576,45,634,634)
arr.push(book2)
//console.log(book1.id)
router.use((req,res,next) => {
    console.log('Node js Middleware express.Router()');   
    next()
})

router.post('/user/login', (req,res)=>{
    res.send('{ id: 1, mail: "test@mail.ru" }').status(201)
}
)

router.get('/books', (req,res)=>{
    
    res.send(BooksRepository.getBooks())
})
router.get('/books/:id',(req, res) => {
    let {id} = req.params;
    const idx=arr.findIndex(el=>el.id==id)
            if(idx==-1) {
                res.status(404).send('book||not found');   
            }
            
            else{
                res.send(BooksRepository.getBook(idx))
            }      
    }) 
//app.use(express.json())
router.post('/books', (req,res)=>{
    const {title,description,authors,favorite,fileCover,fileName} = req.body
    const abc=new book(title,description,authors,favorite,fileCover,fileName)
    console.log(abc)
    BooksRepository.createBook(abc)
    res.send(arr)
})
router.put('/books/:id', (req,res)=>{
    const {id}=req.params
    const idx = arr.findIndex(el => el.id == id);
    if (idx!=-1) {
        const {title,description,authors,favorite,fileCover,fileName,fileBook} = req.body
        res.send(BooksRepository.updateBook(idx,{id:idx+1,title:title,description:description,authors:authors,favorite:favorite,fileCover:fileCover,fileName:fileName,fileBook:fileBook}))
        console.log(arr[idx])
    }
    else {
        res.status(404).send('not found')
    } 
})
router.delete('/books/:id', (req, res) => {
    const {id} = req.params;
    const idx = arr.findIndex(el => el.id == id);                                                                            
    if (idx!=-1) {
        res.send(BooksRepository.deleteBook(idx))
    }
    else{
        res.status(404).send('not found')
    }
});
router.get('/books/:id/download', (req,res) =>{
    let {id}=req.params
    const idx = arr.findIndex(el => el.id == id);
    if (idx!=-1) {
        fs.writeFile('qwer.txt',Object.entries(arr[idx]).map(([k,v])=>`${k}: ${v}`).join(', '),(err)=>console.log(err))
        fs.routerendFileSync('qwer.txt','Привет!')
        res.download(__dirname+'C:\Nodejs\date.js','qwertyuiop1',(err)=>console.log(err)).send('ok')
    }
    else{
        res.status(404).send('not found')
    }
    //module.exports={router,arr,idx}
})

module.exports=router