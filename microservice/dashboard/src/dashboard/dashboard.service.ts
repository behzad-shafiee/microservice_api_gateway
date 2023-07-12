import { Injectable } from '@nestjs/common'
import { UpdateDashboardDto } from './dto/update-dashboard.dto'

@Injectable()
export class DashboardService
{
  dashboard (data)
  {
    return { message: "Wellcome to dashboard" , data }
  }

  findAll ()
  {
    return `This action returns all dashboard`
  }

  findOne ( id: number )
  {
    return `This action returns a #${ id } dashboard`
  }

  update ( id: number, updateDashboardDto: UpdateDashboardDto )
  {
    return `This action updates a #${ id } dashboard`
  }

  remove ( id: number )
  {
    return `This action removes a #${ id } dashboard`
  }
}
