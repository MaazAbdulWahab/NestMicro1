import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @MessagePattern('summation')
  addNumbers(numbers:any){
    console.log("GETTING CALL")
    let sum = 0;

    numbers.forEach( num => {
    sum += num;
})

return sum


  }
  
}
