import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { DashboardService } from './dashboard.service'
import { CreateDashboardDto } from './dto/create-dashboard.dto'

@Controller()
export class DashboardController
{
  constructor ( private readonly dashboardService: DashboardService ) { }

  @MessagePattern( 'auth' )
  dashboard ( @Payload() createDashboardDto: CreateDashboardDto )
  {
    return this.dashboardService.dashboard( createDashboardDto )
  }
}
