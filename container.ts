import "reflect-metadata"
import { injectable,inject,Container } from "inversify";
import { BooksRepository } from "./repository";
const IoC=new Container()
IoC.bind<any>(BooksRepository).toSelf();
//console.log(IoC.get(BooksRepository).Hi())
//IoC.bind<any>(BooksRepository).toSelf()
