const iconMartian = <i class="fas fa-rocket"></i>;
const iconHuman = <i class="fas fa-user"></i>;
const iconRobot = <i class="fas fa-robot"></i>;
const iconMutant = <i class="fas fa-eye"></i>;
const iconDecapodian = <i class="fas fa-pastafarianism"></i>;
const iconOmicronian = <i class="fas fa-frog"></i>;
const iconAmphibiosans = <i class="fas fa-hand-spock"></i>;

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
