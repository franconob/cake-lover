import { connect } from "react-redux";
import { IRootState } from "../../state-mgmt/rootState";

import CakeList from "./CakeList";
import { ICake } from "../../models/cake";

const cakeList: ICake[] = [
  {
    id: 1,
    name: "Cake 1",
    imageUrl:
      "https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1542062283/chocolate-and-cream-layer-cake-1812-cover.jpg?itok=rEWL7AIN",
    comment: "comment",
    yumFactor: 1
  },
  {
    id: 2,
    name: "Cake 2",
    imageUrl:
      "https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1542062283/chocolate-and-cream-layer-cake-1812-cover.jpg?itok=rEWL7AIN",
    comment: "comment 2",
    yumFactor: 4
  }
];

export const mapStateToProps = (state: IRootState) => ({
  cakeList
});

export default connect(mapStateToProps)(CakeList);
