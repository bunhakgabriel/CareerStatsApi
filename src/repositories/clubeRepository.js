import { pool } from "../database/connection.js";

const clubeRepository = {
    
    async getClubes(){
        const sql = `SELECT * FROM clubes`;
    
        const result = await pool.query(sql);
        return result.rows;
    },

    async postClube(clube){
        const sql = `
            INSERT INTO CLUBES 
                (nome_completo, nome_popular, pais_id, escudo_url)
            VALUES 
                ($1, $2, $3, $4) 
            RETURNING *`;

        const values = [
            clube.nome_completo,
            clube.nome_popular,
            clube.pais_id,
            clube.escudo_url
        ]
        const result = await pool.query(sql, values);
        return result.rows[0];
    }
}

export default clubeRepository;