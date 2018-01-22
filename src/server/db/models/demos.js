const queries = require('../queries/demo_days');

class Demos {
    
    async getAll(){
        const sql = await queries.getAllDemoDays();

        const demos = sql.map((day) =>{
          return {
            id: day.demo_day_id,
            date: day.demo_date
          }
  
        })

        return demos;
    };

    async getById(id){
      const sql = await queries.getSingleDemoDay(id);
      
      const demo = {
        id: sql.demo_day_id,
        date: sql.demo_date
      };

      return demo;
    };

    async add(demoObject){
      const newDemo = await this.convertDemo(demoObject);
      const sql = await queries.addDemo(newDemo);
      const demo = {
        id: sql[0].demo_day_id,
        date: sql[0].demo_date
      };

      return demo;
    };

    async convertDemo(demoObject){
      const demo =  {
        demo_date: demoObject.date
      };

      return demo;
  }

}

module.exports = new Demos();