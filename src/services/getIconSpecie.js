const iconMartian = <i className="fas fa-rocket"></i>;
const iconHuman = <i className="fas fa-user"></i>;
const iconRobot = <i className="fas fa-robot"></i>;
const iconMutant = <i className="fas fa-eye"></i>;
const iconDecapodian = <i className="fas fa-pastafarianism"></i>;
const iconOmicronian = <i className="fas fa-frog"></i>;
const iconAmphibiosans = <i className="fas fa-hand-spock"></i>;

const getIconSpecie = (species) => {
  if (species === "Martian") {
    return iconMartian;
  } else if (species === "Human") {
    return iconHuman;
  } else if (species === "Robot") {
    return iconRobot;
  } else if (species === "Mutant") {
    return iconMutant;
  } else if (species === "Decapodian") {
    return iconDecapodian;
  } else if (species === "Omicronian") {
    return iconOmicronian;
  } else if (species === "Amphibiosans") {
    return iconAmphibiosans;
  }
};

export default getIconSpecie;
