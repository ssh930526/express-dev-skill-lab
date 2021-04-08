const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

//named function based on what function serve

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req,res) {
    console.log(req.params.id)
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        skillId: req.params.id
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}


function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');

}


function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function update(req, res) {
    console.log(req.body);
    if(req.body.done === 'on') {
        req.body.done = true;
    } else {
        req.body.done = false;
    }

    Skill.updateOne(req.body, req.params.id);
    
    res.redirect('/skills');
}