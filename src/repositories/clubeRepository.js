import { pool } from "../database/connection.js";

const clubeRepository = {
    async getClubes(){
        const sql = `SELECT * FROM clubes`;
    
        const result = await pool.query(sql);
        return result.rows;
    }
}

export default clubeRepository;