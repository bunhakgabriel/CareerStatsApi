import { pool } from "../database/connection.js";

const jogadorRepository = {
  async getJogadores() {
    const sql = `SELECT * FROM jogadores`;

    const result = await pool.query(sql);
    return result.rows;
  },
};

export default jogadorRepository;
