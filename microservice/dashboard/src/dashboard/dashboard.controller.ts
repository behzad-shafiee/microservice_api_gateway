import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { DashboardService } from './dashboard.service'

@Controller()
export class DashboardController
{
  constructor ( private readonly dashboardService: DashboardService ) { }

  @MessagePattern( { cmd: 'dashboard' } )
  dashboard (data:any)
  {
    
    return this.dashboardService.dashboard(data)
  }
}
