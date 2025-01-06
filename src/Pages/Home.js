import React, { Component } from "react";
import Title from "../components/Title";
import Centre from "../components/Centre";
import Right from "../components/Right";
import Left from "../components/Left";
import Loading from "../components/Loading";
import SearchableDropdown from "../components/SearchableDropdown";
import BarChart from "../components/BarChart";
import LeafletMap from "../components/LeafletMap";
import SpeciesSelect from "../components/SpeciesSelect";
import { color } from "chart.js/helpers";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//IMP : If a variable is added in state, make sure to remove it in loaddata() before it is passed to createMonthlyData()

var files = [
  "AlexandrineParakeet.json",
  "AlpineSwift.json",
  "AmurFalcon.json",
  "Ashy-crownedSparrow-Lark.json",
  "AshyDrongo.json",
  "AshyPrinia.json",
  "AshyWoodswallow.json",
  "AsianBrownFlycatcher.json",
  "AsianEmeraldDove.json",
  "AsianFairy-bluebird.json",
  "AsianGreenBee-eater.json",
  "AsianKoel.json",
  "AsianOpenbill.json",
  "AsianPalmSwift.json",
  "AsianTit.json",
  "AsianWoolly-neckedStork.json",
  "Baillon'sCrake.json",
  "BandedBayCuckoo.json",
  "BankMyna.json",
  "BankSwallow.json",
  "Bar-headedGoose.json",
  "Bar-wingedFlycatcher-shrike.json",
  "BarnSwallow.json",
  "BarredButtonquail.json",
  "Bay-backedShrike.json",
  "BayaWeaver.json",
  "Besra.json",
  "Black-backedDwarf-Kingfisher.json",
  "Black-belliedPlover.json",
  "Black-cappedKingfisher.json",
  "Black-crownedNightHeron.json",
  "Black-headedBunting.json",
  "Black-headedCuckooshrike.json",
  "Black-headedGull.json",
  "Black-headedIbis.json",
  "Black-hoodedOriole.json",
  "Black-napedMonarch.json",
  "Black-napedOriole.json",
  "Black-rumpedFlameback.json",
  "Black-tailedGodwit.json",
  "Black-throatedMunia.json",
  "Black-wingedKite.json",
  "Black-wingedStilt.json",
  "BlackBittern.json",
  "BlackDrongo.json",
  "BlackEagle.json",
  "BlackKite.json",
  "BlackRedstart.json",
  "BlackStork.json",
  "Blue-and-whiteFlycatcher.json",
  "Blue-cappedRock-Thrush.json",
  "Blue-cheekedBee-eater.json",
  "Blue-facedMalkoha.json",
  "Blue-tailedBee-eater.json",
  "Blue-throatedFlycatcher.json",
  "BlueRock-Thrush.json",
  "Bluethroat.json",
  "Blyth'sPipit.json",
  "Blyth'sReedWarbler.json",
  "Bonelli'sEagle.json",
  "BootedEagle.json",
  "BootedWarbler.json",
  "BrahminyKite.json",
  "BrahminyStarling.json",
  "Broad-tailedGrassbird.json",
  "Bronze-wingedJacana.json",
  "Brown-breastedFlycatcher.json",
  "Brown-cappedPygmyWoodpecker.json",
  "Brown-cheekedFulvetta.json",
  "Brown-headedBarbet.json",
  "Brown-headedGull.json",
  "BrownCrake.json",
  "BrownFish-Owl.json",
  "BrownNoddy.json",
  "BrownRockChat.json",
  "BrownShrike.json",
  "BrownWood-Owl.json",
  "CaspianTern.json",
  "ChangeableHawk-Eagle.json",
  "Chestnut-belliedSandgrouse.json",
  "Chestnut-tailedStarling.json",
  "CinnamonBittern.json",
  "CitrineWagtail.json",
  "ClamorousReedWarbler.json",
  "CommonBabbler.json",
  "CommonBuzzard.json",
  "CommonChiffchaff.json",
  "CommonCrane.json",
  "CommonCuckoo.json",
  "CommonGrasshopperWarbler.json",
  "CommonGreenshank.json",
  "CommonHawk-Cuckoo.json",
  "CommonIora.json",
  "CommonKingfisher.json",
  "CommonMyna.json",
  "CommonPochard.json",
  "CommonRedshank.json",
  "CommonRosefinch.json",
  "CommonSandpiper.json",
  "CommonSnipe.json",
  "CommonTailorbird.json",
  "CommonWoodshrike.json",
  "CoppersmithBarbet.json",
  "CottonPygmy-Goose.json",
  "CrestedBunting.json",
  "CrestedGoshawk.json",
  "CrestedSerpent-Eagle.json",
  "CrestedTreeswift.json",
  "Crimson-backedSunbird.json",
  "CurlewSandpiper.json",
  "DemoiselleCrane.json",
  "DesertWheatear.json",
  "Dunlin.json",
  "DuskyCrag-Martin.json",
  "EasternBarnOwl.json",
  "EasternCattle-Egret.json",
  "EasternOrpheanWarbler.json",
  "EasternYellowWagtail.json",
  "EgyptianVulture.json",
  "EurasianCollared-Dove.json",
  "EurasianCoot.json",
  "EurasianCrag-Martin.json",
  "EurasianCurlew.json",
  "EurasianGoshawk.json",
  "EurasianGriffon.json",
  "EurasianHobby.json",
  "EurasianHoopoe.json",
  "EurasianKestrel.json",
  "EurasianMoorhen.json",
  "EurasianSparrowhawk.json",
  "EurasianSpoonbill.json",
  "EurasianWigeon.json",
  "EurasianWryneck.json",
  "EuropeanRoller.json",
  "FerruginousDuck.json",
  "ForestWagtail.json",
  "Fork-tailedDrongo-Cuckoo.json",
  "Gadwall.json",
  "Garganey.json",
  "GlossyIbis.json",
  "Golden-frontedLeafbird.json",
  "Gray-belliedCuckoo.json",
  "Gray-breastedPrinia.json",
  "Gray-frontedGreen-Pigeon.json",
  "Gray-headedCanary-Flycatcher.json",
  "Gray-headedSwamphen.json",
  "Gray-neckedBunting.json",
  "Gray-throatedMartin.json",
  "GrayFrancolin.json",
  "GrayHeron.json",
  "GrayJunglefowl.json",
  "GrayWagtail.json",
  "GreatCormorant.json",
  "GreatEgret.json",
  "GreaterCoucal.json",
  "GreaterFlamingo.json",
  "GreaterPainted-Snipe.json",
  "GreaterRacket-tailedDrongo.json",
  "GreaterSand-Plover.json",
  "GreaterSpottedEagle.json",
  "GreaterWhitethroat.json",
  "GreatGrayShrike.json",
  "GreatThick-knee.json",
  "Green-wingedTeal.json",
  "GreenishWarbler.json",
  "GreenSandpiper.json",
  "GreenWarbler.json",
  "Gull-billedTern.json",
  "Hair-crestedDrongo.json",
  "HimalayanGriffon.json",
  "HouseCrow.json",
  "HouseSparrow.json",
  "Hume'sWarbler.json",
  "ImperialEagle.json",
  "IndianBlackbird.json",
  "IndianBlueRobin.json",
  "IndianBushlark.json",
  "IndianCormorant.json",
  "IndianCourser.json",
  "IndianCuckooshrike.json",
  "IndianGoldenOriole.json",
  "IndianGrayHornbill.json",
  "IndianNightjar.json",
  "IndianParadise-Flycatcher.json",
  "IndianPeafowl.json",
  "IndianPiedStarling.json",
  "IndianPitta.json",
  "IndianPond-Heron.json",
  "IndianRobin.json",
  "IndianRoller.json",
  "IndianScimitar-Babbler.json",
  "IndianScops-Owl.json",
  "IndianSilverbill.json",
  "IndianSkimmer.json",
  "IndianSpot-billedDuck.json",
  "IndianSpottedEagle.json",
  "IndianThick-knee.json",
  "IndianVulture.json",
  "IndianWhite-eye.json",
  "IndianYellowTit.json",
  "IsabellineShrike.json",
  "IsabellineWheatear.json",
  "JackSnipe.json",
  "Jerdon'sLeafbird.json",
  "Jerdon'sNightjar.json",
  "JungleBabbler.json",
  "JungleBush-Quail.json",
  "JungleMyna.json",
  "JungleNightjar.json",
  "JunglePrinia.json",
  "KentishPlover.json",
  "Knob-billedDuck.json",
  "LaggarFalcon.json",
  "Large-billedCrow.json",
  "Large-billedLeafWarbler.json",
  "LargeGrayBabbler.json",
  "LaughingDove.json",
  "LesserAdjutant.json",
  "LesserBlack-backedGull.json",
  "LesserCrestedTern.json",
  "LesserCuckoo.json",
  "LesserFlamingo.json",
  "LesserKestrel.json",
  "LesserWhistling-Duck.json",
  "LesserWhitethroat.json",
  "LesserYellownape.json",
  "LittleCormorant.json",
  "LittleCrake.json",
  "LittleEgret.json",
  "LittleGrebe.json",
  "LittleRingedPlover.json",
  "LittleStint.json",
  "LittleSwift.json",
  "LittleTern.json",
  "Long-billedPipit.json",
  "Long-leggedBuzzard.json",
  "Long-tailedShrike.json",
  "Loten'sSunbird.json",
  "MalabarFlameback.json",
  "MalabarGrayHornbill.json",
  "MalabarLark.json",
  "MalabarParakeet.json",
  "MalabarPied-Hornbill.json",
  "MalabarTrogon.json",
  "MalabarWhistling-Thrush.json",
  "Mallard.json",
  "MarshSandpiper.json",
  "MediumEgret.json",
  "MongolianShort-toedLark.json",
  "Montagu'sHarrier.json",
  "MottledWood-Owl.json",
  "NilgiriFlowerpecker.json",
  "NilgiriWood-Pigeon.json",
  "NorthernPintail.json",
  "NorthernShoveler.json",
  "Olive-backedPipit.json",
  "Orange-headedThrush.json",
  "OrangeMinivet.json",
  "OrientalDarter.json",
  "OrientalHoney-buzzard.json",
  "OrientalMagpie-Robin.json",
  "OrientalPratincole.json",
  "OrientalScops-Owl.json",
  "OrientalTurtle-Dove.json",
  "Osprey.json",
  "PacificGolden-Plover.json",
  "PaddyfieldPipit.json",
  "PaddyfieldWarbler.json",
  "PaintedBush-Quail.json",
  "PaintedFrancolin.json",
  "PaintedSandgrouse.json",
  "PaintedStork.json",
  "Pale-billedFlowerpecker.json",
  "PaleMartin.json",
  "Pallas'sGull.json",
  "PallidHarrier.json",
  "PallidScops-Owl.json",
  "PeregrineFalcon.json",
  "Pheasant-tailedJacana.json",
  "PiedAvocet.json",
  "PiedBushchat.json",
  "PiedCuckoo.json",
  "PiedKingfisher.json",
  "Pin-tailedSnipe.json",
  "PlainPrinia.json",
  "Plum-headedParakeet.json",
  "Puff-throatedBabbler.json",
  "Purple-rumpedSunbird.json",
  "PurpleHeron.json",
  "PurpleSunbird.json",
  "RainQuail.json",
  "Red-breastedFlycatcher.json",
  "Red-breastedParakeet.json",
  "Red-crestedPochard.json",
  "Red-headedBunting.json",
  "Red-napedIbis.json",
  "Red-neckedFalcon.json",
  "Red-neckedGrebe.json",
  "Red-neckedPhalarope.json",
  "Red-throatedPipit.json",
  "Red-ventedBulbul.json",
  "Red-wattledLapwing.json",
  "Red-whiskeredBulbul.json",
  "RedAvadavat.json",
  "RedCollared-Dove.json",
  "RedSpurfowl.json",
  "Richard'sPipit.json",
  "RiverTern.json",
  "RockBush-Quail.json",
  "RockPigeon.json",
  "Rose-ringedParakeet.json",
  "RosyStarling.json",
  "Ruddy-breastedCrake.json",
  "RuddyShelduck.json",
  "RuddyTurnstone.json",
  "Ruff.json",
  "Rufous-belliedEagle.json",
  "Rufous-frontedPrinia.json",
  "Rufous-tailedLark.json",
  "RufousBabbler.json",
  "RufousTreepie.json",
  "RufousWoodpecker.json",
  "Rusty-tailedFlycatcher.json",
  "SavannaNightjar.json",
  "Scaly-breastedMunia.json",
  "Shikra.json",
  "Short-earedOwl.json",
  "Short-toedSnake-Eagle.json",
  "SiberianStonechat.json",
  "SirkeerMalkoha.json",
  "Slaty-breastedRail.json",
  "Slaty-leggedCrake.json",
  "Slender-billedGull.json",
  "SmallButtonquail.json",
  "SmallMinivet.json",
  "SmallPratincole.json",
  "Spot-breastedFantail.json",
  "SpottedDove.json",
  "SpottedFlycatcher.json",
  "SpottedOwlet.json",
  "SpottedRedshank.json",
  "Square-tailedBulbul.json",
  "SteppeEagle.json",
  "Stork-billedKingfisher.json",
  "Streak-throatedSwallow.json",
  "StriatedHeron.json",
  "StriolatedBunting.json",
  "Sulphur-belliedWarbler.json",
  "Sykes'sNightjar.json",
  "Sykes'sWarbler.json",
  "TaigaBean-Goose.json",
  "TaigaFlycatcher.json",
  "Tawny-belliedBabbler.json",
  "TawnyEagle.json",
  "TawnyLark.json",
  "TawnyPipit.json",
  "Temminck'sStint.json",
  "Thick-billedFlowerpecker.json",
  "Thick-billedWarbler.json",
  "TibetanSand-Plover.json",
  "Tickell'sBlueFlycatcher.json",
  "Tickell'sLeafWarbler.json",
  "Tickell'sThrush.json",
  "TreePipit.json",
  "TricoloredMunia.json",
  "TuftedDuck.json",
  "Tytler'sLeafWarbler.json",
  "UltramarineFlycatcher.json",
  "VariableWheatear.json",
  "VerditerFlycatcher.json",
  "VernalHanging-Parrot.json",
  "Vigors'sSunbird.json",
  "Watercock.json",
  "WesternCrownedWarbler.json",
  "WesternHouse-Martin.json",
  "WesternMarshHarrier.json",
  "WesternReef-Heron.json",
  "WesternYellowWagtail.json",
  "Whimbrel.json",
  "WhiskeredTern.json",
  "White-belliedBlueFlycatcher.json",
  "White-belliedDrongo.json",
  "White-belliedMinivet.json",
  "White-belliedSea-Eagle.json",
  "White-breastedWaterhen.json",
  "White-browedBulbul.json",
  "White-browedFantail.json",
  "White-browedWagtail.json",
  "White-cheekedBarbet.json",
  "White-eyedBuzzard.json",
  "White-napedWoodpecker.json",
  "White-rumpedMunia.json",
  "White-rumpedShama.json",
  "White-rumpedVulture.json",
  "White-throatedKingfisher.json",
  "White-wingedTern.json",
  "WhiteStork.json",
  "WhiteWagtail.json",
  "Wire-tailedSwallow.json",
  "WoodSandpiper.json",
  "Yellow-browedBulbul.json",
  "Yellow-browedWarbler.json",
  "Yellow-crownedWoodpecker.json",
  "Yellow-eyedBabbler.json",
  "Yellow-footedGreen-Pigeon.json",
  "Yellow-leggedButtonquail.json",
  "Yellow-throatedSparrow.json",
  "Yellow-wattledLapwing.json",
  "YellowBittern.json",
  "ZittingCisticola.json",
];

files = [
  "AlexandrineParakeet.json",
  "AlpineSwift.json",
  "AmurFalcon.json",
  "Ashy-crownedSparrow-Lark.json",
  "AshyDrongo.json",
  "AshyPrinia.json",
  "AshyWoodswallow.json",
  "AsianBrownFlycatcher.json",
  "AsianEmeraldDove.json",
  "AsianFairy-bluebird.json",
  "AsianGreenBee-eater.json",
];

var files2 = [];
var monthlyData = {};

function createMonthlyData(jsonObj) {
  const result = {};
  // Iterate through each "name" in the object
  for (let name in jsonObj) {
    if (jsonObj.hasOwnProperty(name)) {
      result[name] = []; // Initialize an array for each name

      // Iterate through each month (1-12)
      for (let month = 1; month <= 12; month++) {
        const monthKey = month.toString(); // Convert month number to string
        const monthData = jsonObj[name][monthKey];

        // Initialize the sum for the current month
        let sum = 0;

        // Check if the data exists for this month and is an array
        if (Array.isArray(monthData)) {
          // Sum the "d" values for this month
          sum = monthData.reduce(
            (acc, item) => acc + (parseInt(item.d) || 0),
            0
          );
        }

        // Add the sum to the array for the current name
        result[name].push(sum);
      }
    }
  }

  console.log(result);
  return result;
}

const calculateNames = () => {
  files2 = [];
  let name = "";
  for (var i = 0; i < files.length; i++) {
    //console.log(files[i]);
    name = files[i];
    name = name.slice(0, -5);
    // Add a space between lowercase and uppercase characters
    name = name.replace(/([a-z])([A-Z])/g, "$1 $2");
    files2.push(name);
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      birdSelected: ["Alexandrine Parakeet", "Common Cuckoo"],
    };
  }

  componentDidMount() {
    // Fetch the JSON file when the component mounts
    this.loadData();
  }

  loadData = async () => {
    calculateNames();
    //await delay(2000);
    try {
      // Dynamically import the JSON file (make sure it's in the public folder or proper path)
      for (var i = 0; i < files.length; i++) {
        //console.log(filename)
        const jsonData = await import("../assets/newJsonBirds/" + files[i]); // Adjust the path as necessary
        this.setState({ [files2[i]]: jsonData });
      }
    } catch (error) {
      console.error("Error loading the JSON file:", error);
    } finally {
      // Set loading to false when data is loaded

      var clonedState = JSON.parse(JSON.stringify(this.state)); //Duplicate state
      delete clonedState["loading"];
      delete clonedState["birdSelected"];
      //console.log(clonedState)
      monthlyData = createMonthlyData(clonedState);

      this.setState({ loading: false });
      await delay(2000);
      console.log(this.state);
    }
  };

  getUnusedBirdName = () => {
    const usedBirdName = this.state.birdSelected;
    console.log(usedBirdName);
  };

  handleDropdownChange = (selected) => {
    //console.log('Selected:', selected);
    // if (!this.state.birdsSelected.includes(selected.label)) {
    //   this.setState((prevState) => ({
    //     birdsSelected: [...prevState.birdsSelected, selected.label],
    //   }));
    // }
  };

  render() {
    const { loading, sum } = this.state;

    // Render loading or sum based on loading state
    if (loading) {
      return (
        <div className="centre">
          <Loading />
        </div>
      );
    }
    return (
      <div className="layout-container">
        <div className="left">
          <p>Left Menu</p>
          <SpeciesSelect
            options={files2}
            onChange={this.handleDropdownChange}
          />
        </div>
        <div className="centre">
          <Title title="Welcome" />
          <p style={{ color: "red" }}>
            This is Home. Bird = {String(this.state.birdSelected)}
          </p>
          <div
            style={{
              minHeight: 500,
              maxWidth: "80vw",
              height: "fit-content",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {/* TODO: For now only one barchart of the first selected bird is shown: make decision how to handle multiple birds*/}
            <BarChart data={monthlyData[this.state.birdSelected[0]]} />
          </div>

          <div>
            <LeafletMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
