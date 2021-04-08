module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};

const skills = [
    {text: 'Coding Skills', done: false},
    {text: 'Programing Skills', done: false},
    {text: 'Sloving Skills', done: true},
];

function getAll() {
    return skills;
}

function getOne(skillIdx) {
    return skills[skillIdx];
}

function create(skill) {
    skills.push(skill); //array
}

function deleteOne(skillIdx) {
    skills.splice(skillIdx, 1);
}
function updateOne(updateSkill, skillIdx) {
    skills.splice(skillIdx, 1, updateSkill);
}