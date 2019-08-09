const Dev = require("../models/Dev");

module.exports = {
  async store(req, res){
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedUser = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if(!targetDev){
      return res.status(400).json({ error: 'Dev not exist!' });
    } else {
      loggedUser.dislikes.push(targetDev._id);
      await loggedUser.save();
      return res.json(loggedUser)
    }

  }
}
