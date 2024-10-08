// mock Data simulation
import Mock from 'mockjs'

// Chart data
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float  Generate a random number between 100 and 8000. Keep the decimals. Minimum 0 digits. Maximum 0 digits.
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          apple: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          meizu: Mock.Random.float(100, 8000, 0, 0),
          samsung: Mock.Random.float(100, 8000, 0, 0),
          mi: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // Pie Chart
        videoData: [
          {
            name: 'MI',
            value: 2999
          },
          {
            name: 'Apple',
            value: 5999
          },
          {
            name: 'vivo',
            value: 1500
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: 'MEIZU',
            value: 2200
          },
          {
            name: 'Samsung',
            value: 4500
          }
        ],
        // Bar Chart
        userData: [
          {
            date: 'Monday',
            new: 5,
            active: 200
          },
          {
            date: 'Tuesday',
            new: 10,
            active: 500
          },
          {
            date: 'Wednesday',
            new: 12,
            active: 550
          },
          {
            date: 'Thursday',
            new: 60,
            active: 800
          },
          {
            date: 'Friday',
            new: 65,
            active: 550
          },
          {
            date: 'Saturday',
            new: 53,
            active: 770
          },
          {
            date: 'Sunday',
            new: 33,
            active: 170
          }
        ],
        // Line chart
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: 'vivo',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: 'Apple',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: 'MI',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: 'Samsung',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: 'Meizu',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  }
}
