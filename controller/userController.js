const client = require("../pgres.js");

const getUser = (req, res) => {
  client.query(`SELECT * FROM USERS;`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: `Error ${err}` });
      return;
    }
    res.status(200).json(result.rows);
  })
}

const getspecificuser = (req, res) => {
  const { id } = req.params;
  client.query(`SELECT * FROM USERS WHERE id = $1`, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: `Error ${err}` });
      return;
    }
    res.status(200).json(result.rows);
  })
}

const postUser = (req, res) => {
  const { id } = req.params;
  const { name, age, email, technical_skills, location, bio } = req.body;
  client.query(`INSERT INTO USERS (name,age,email,technical_skills,location,bio) VALUES($1,$2,$3,$4,$5,$6);`, [name, age, email, technical_skills, location, bio], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: `Error ${err}` });
      return;
    }
    res.status(200).json(result.rows);
  })
}

const patchUser = (req, res) => {
  const { id } = req.params;
  const { name, age, email, technical_skills, location, bio } = req.body;
  client.query(`UPDATE USERS SET name = $1,
          age = $2,
          email= $3,
          technical_skills = $4,
          location = $5 ,
          bio = $6 WHERE id = $7;`,
    [name, age, email, technical_skills, location, bio,id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: `Error ${err}` })
        return;
      }
      res.status(200).json(result.rows);
    })
}


const deleteUser=(req,res)=>{
  const {id} = req.params;
  client.query(`DELETE FROM USERS WHERE id = $1;`,[id],(err,result)=>{
    if(err){
      console.log(err);
      res.status(500).json({messge:`Error ${err}`})
      return;
    }

    res.status(200).json(result.rows);
  })

}


module.exports = {getUser,getspecificuser,postUser,patchUser,deleteUser}
