import HighTenacity from "../img/threads/high-tenacity-yarn.jpg";
import IndustrialThread from "../img/threads/industrial-thread.webp";
import SewingThread from "../img/threads/sewing-thread.jpeg";
import ZipStitchThread from "../img/threads/zip-stitch-thread.jpeg";
import CarpetYarn from "../img/threads/carpet-yarn.webp";
import EmbroiderYarn from "../img/threads/embroidery-yarn.jpeg";
import TwistedWarp from "../img/weaving-yarn/twisted-warp.jpg";
import TwistedWeft from "../img/weaving-yarn/twisted-weft.webp";
import DyedWarp from "../img/weaving-yarn/dyed-warp.jpg";
import DyedWeft from "../img/weaving-yarn/dyed-weft.jpg";
import Fancy from "../img/weaving-yarn/fancy.jpeg";
import Spun from "../img/weaving-yarn/spun.jpg";
import Shirting from "../img/fabrics/shirting.webp";
import Interlinings from "../img/fabrics/interlinings.webp";
import JacquardFabric from "../img/fabrics/jacquard-fabric.jpg";

const categories = [
  {
    name: "Thread",
    products: [
      { name: "High Tenacity Thread", image: HighTenacity },
      { name: "Industrial Thread", image: IndustrialThread },
      { name: "Sewing Thread", image: SewingThread },
      { name: "Zip Stitch Thread", image: ZipStitchThread },
      { name: "Carpet Yarns", image: CarpetYarn },
      { name: "Embroidery Yarns", image: EmbroiderYarn },
    ],
  },
  {
    name: "Weaving Yarn",
    products: [
      { name: "Twisted Warp", image: TwistedWarp },
      { name: "Twisted Weft", image: TwistedWeft },
      { name: "Dyed Warp", image: DyedWarp },
      { name: "Dyed Weft", image: DyedWeft },
      { name: "Fancy Yarns", image: Fancy },
      { name: "Spun Yarns", image: Spun },
    ],
  },
  {
    name: "Fabrics",
    products: [
      { name: "Shirting", image: Shirting },
      { name: "Interlining", image: Interlinings },
      { name: "Jacquard Fabrics", image: JacquardFabric },
    ],
  },
  {
    name: "Textile Machines",
    products: [
      { name: "TFO Machines", image: "" },
      { name: "Pre Winder", image: "" },
      { name: "Thread Yarn Plant", image: "" },
      { name: "Spun TFO", image: "" },
      { name: "High Bulk TFO", image: "" },
      { name: "Cabling Machine", image: "" },
      { name: "Industrial Twister", image: "" },
      { name: "Soft Winder", image: "" },
      { name: "Dyed Yarn Rewinder", image: "" },
      { name: "Rapier Loom", image: "" },
      { name: "Air Jet Loom", image: "" },
    ],
  },
];

export default categories;
