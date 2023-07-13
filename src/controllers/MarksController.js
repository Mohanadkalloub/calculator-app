import axios from "axios";
import Mark from "../models/Mark";

class MarksController {
    // operations : 
    // 1 create 
    // 2 read 
    // 3 delete 

    /**
     * delete function 
     * @param id 
     * @return bool deleted
     */
    async delete(id) {
        try {
            const response = await axios.get(`https://calculator-25d85-default-rtdb.firebaseio.com/marks/${id}.json`)
            return response.status == 200 
        } catch (error) {
            return false
        }
    }
    /**
     * @name read function 
     * @return [mark]
     */
    async read() {
        try {
            const response = await axios.get("https://calculator-25d85-default-rtdb.firebaseio.com/marks.json")
            if (response.status == 200) {
                const marks = [] ; 
                for(const key in response.data) {
                    const object = response.data[key]
                    const mark = new Mark ();
                    mark.id = [key];
                    mark.name = object.name
                    mark.mid = object.mid
                    mark.activites = object.activites
                    mark.final = object.final
                    marks.push(mark);
                }
                return marks ; 
            }
            
        } catch (error) {
            return [];
        }
    }
    /**
     * create function 
     * @param Mark mark 
     * @return Mark mark 
     */
    async create (mark) {
        try {
            const response = await axios.post("https://calculator-25d85-default-rtdb.firebaseio.com/marks.json" , mark);
            if(response.status == 200) {
                return response.data.name; 
            }
        } catch (error) {
            return null
        }
    }
}
export default MarksController;
