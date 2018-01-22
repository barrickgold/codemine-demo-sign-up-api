const queries = require('../queries/demo_entries');

class Entries {
    
    async getAll(id){
        const sql = await queries.getAllDemoEntries(id);
        const entries = sql.map((entry) =>{
          return {
            id: entry.demo_entry_id,
            demoId: entry.demo_day_id,
            name: entry.presenter_name,
            title: entry.demo_title,
            position: entry.position,
            isDeleted: entry.is_deleted
          }
  
        })

        return entries;
    };

    async getById(id, entryId){
      const sql = await queries.getSingleDemoEntry(id, entryId);
      
      const entry = {
        id: sql.demo_entry_id,
        demoId: sql.demo_day_id,
        name: sql.presenter_name,
        title: sql.demo_title,
        position: sql.position,
        isDeleted: sql.is_deleted
      };

      return entry;
    };

    async add(entryObject){
        const newEntry = await this.convertEntry(entryObject);
        const sql = await queries.addEntry(newEntry);
        const entry = {
            id: sql[0].demo_entry_id,
            demoId: sql[0].demo_day_id,
            name: sql[0].presenter_name,
            title: sql[0].demo_title,
            position: sql[0].position,
            isDeleted: sql[0].is_deleted
        };
  
        return entry;
    };

    async convertEntry(entryObject){
        const entry =  {
            demo_day_id: entryObject.demoId,
            presenter_name: entryObject.name,
            demo_title: entryObject.title,
            position: entryObject.position,
            is_deleted: entryObject.isDeleted
        };
  
        return entry;
    }
}

module.exports = new Entries();