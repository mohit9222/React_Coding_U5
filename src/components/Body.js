import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //   let listOfResturants2 = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "542132",
  //         name: "Dominoz Pizza",
  //         uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
  //         city: "22",
  //         area: "Majra    Bansal Home",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
  //         cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 33,
  //         minDeliveryTime: 33,
  //         maxDeliveryTime: 33,
  //         slaString: "33 MINS",
  //         lastMileTravel: 0.6000000238418579,
  //         slugs: {
  //           restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
  //         locality: "Patel Nagar",
  //         parentId: 22321,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         sla: {
  //           deliveryTime: 33,
  //         },
  //         avgRating: "4.8",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "321517",
  //         name: "FOOD PLANET RESTAURANT",
  //         uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
  //         city: "22",
  //         area: "Majra",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "ykboewqeoxnne8fgrnui",
  //         cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
  //         tags: [],
  //         costForTwo: 20000,
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 25,
  //         minDeliveryTime: 25,
  //         maxDeliveryTime: 25,
  //         slaString: "25 MINS",
  //         lastMileTravel: 0.699999988079071,
  //         slugs: {
  //           restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
  //         locality: "Patel Nagar",
  //         parentId: 81850,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         aggregatedDiscountInfo: {
  //           header: "50% off",
  //           shortDescriptionList: [
  //             {
  //               meta: "50% off | Use WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           descriptionList: [
  //             {
  //               meta: "50% off up to ₹100 | Use code WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           subHeader: "",
  //           headerType: 0,
  //           superFreedel: "",
  //         },
  //         aggregatedDiscountInfoV2: {
  //           header: "50% OFF",
  //           shortDescriptionList: [
  //             {
  //               meta: "Use WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           descriptionList: [
  //             {
  //               meta: "50% off up to ₹100 | Use code WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           subHeader: "",
  //           headerType: 0,
  //           superFreedel: "",
  //         },
  //         chain: [],
  //         feeDetails: {
  //           fees: [],
  //           totalFees: 0,
  //           message: "",
  //           title: "",
  //           amount: "",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID: "",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "0.6 kms",
  //         hasSurge: false,
  //         sla: {
  //           restaurantId: "321517",
  //           deliveryTime: 25,
  //           minDeliveryTime: 25,
  //           maxDeliveryTime: 25,
  //           lastMileTravel: 0.699999988079071,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: false,
  //         avgRating: "2.8",
  //         totalRatings: 50,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "542134",
  //         name: "Pizza Pizza",
  //         uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
  //         city: "22",
  //         area: "Majra    Bansal Home",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
  //         cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 33,
  //         minDeliveryTime: 33,
  //         maxDeliveryTime: 33,
  //         slaString: "33 MINS",
  //         lastMileTravel: 0.6000000238418579,
  //         slugs: {
  //           restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
  //         locality: "Patel Nagar",
  //         parentId: 22321,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         sla: {
  //           deliveryTime: 33,
  //         },
  //         avgRating: "4.1",
  //       },
  //     },
  //   ];

  //   let [listOfResturants, setListOfResturants] = useState([
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "542132",
  //         name: "Dominoz Pizza",
  //         uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
  //         city: "22",
  //         area: "Majra    Bansal Home",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
  //         cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 33,
  //         minDeliveryTime: 33,
  //         maxDeliveryTime: 33,
  //         slaString: "33 MINS",
  //         lastMileTravel: 0.6000000238418579,
  //         slugs: {
  //           restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
  //         locality: "Patel Nagar",
  //         parentId: 22321,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         sla: {
  //           deliveryTime: 33,
  //         },
  //         avgRating: "4.8",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "321517",
  //         name: "FOOD PLANET RESTAURANT",
  //         uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
  //         city: "22",
  //         area: "Majra",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "ykboewqeoxnne8fgrnui",
  //         cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
  //         tags: [],
  //         costForTwo: 20000,
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 25,
  //         minDeliveryTime: 25,
  //         maxDeliveryTime: 25,
  //         slaString: "25 MINS",
  //         lastMileTravel: 0.699999988079071,
  //         slugs: {
  //           restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
  //         locality: "Patel Nagar",
  //         parentId: 81850,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         aggregatedDiscountInfo: {
  //           header: "50% off",
  //           shortDescriptionList: [
  //             {
  //               meta: "50% off | Use WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           descriptionList: [
  //             {
  //               meta: "50% off up to ₹100 | Use code WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           subHeader: "",
  //           headerType: 0,
  //           superFreedel: "",
  //         },
  //         aggregatedDiscountInfoV2: {
  //           header: "50% OFF",
  //           shortDescriptionList: [
  //             {
  //               meta: "Use WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           descriptionList: [
  //             {
  //               meta: "50% off up to ₹100 | Use code WELCOME50",
  //               discountType: "Percentage",
  //               operationType: "RESTAURANT",
  //             },
  //           ],
  //           subHeader: "",
  //           headerType: 0,
  //           superFreedel: "",
  //         },
  //         chain: [],
  //         feeDetails: {
  //           fees: [],
  //           totalFees: 0,
  //           message: "",
  //           title: "",
  //           amount: "",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID: "",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "0.6 kms",
  //         hasSurge: false,
  //         sla: {
  //           restaurantId: "321517",
  //           deliveryTime: 25,
  //           minDeliveryTime: 25,
  //           maxDeliveryTime: 25,
  //           lastMileTravel: 0.699999988079071,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: false,
  //         avgRating: "2.8",
  //         totalRatings: 50,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "542134",
  //         name: "Pizza Pizza",
  //         uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
  //         city: "22",
  //         area: "Majra    Bansal Home",
  //         totalRatingsString: "50+ ratings",
  //         cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
  //         cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 33,
  //         minDeliveryTime: 33,
  //         maxDeliveryTime: 33,
  //         slaString: "33 MINS",
  //         lastMileTravel: 0.6000000238418579,
  //         slugs: {
  //           restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
  //           city: "dehradun",
  //         },
  //         cityState: "22",
  //         address:
  //           "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
  //         locality: "Patel Nagar",
  //         parentId: 22321,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         sla: {
  //           deliveryTime: 33,
  //         },
  //         avgRating: "4.1",
  //       },
  //     },
  //   ]);

  let [listOfResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for Resturant" />
        <button className="search-button" type="submit">
          Search
        </button>
        <button
          className="filter-btn"
          //   onClick={() => {
          //     listOfResturants = listOfResturants.filter(
          //       (res) => res.data.avgRating > 4
          //     );
          //     console.log(listOfResturants);
          //   }}
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="resto-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
        {/* {resList.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
