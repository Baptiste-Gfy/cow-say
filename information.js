const moi = {
  name: "Baptiste",
  campus: "Nantes",
};

const myPresentation = () => {
  const cowsay = require("cowsay");
  console.log(
    cowsay.say({
      text: `Hello, I'm ${moi.name} from ${moi.campus} Campus !`,
    })
  );
};

module.exports = myPresentation;
