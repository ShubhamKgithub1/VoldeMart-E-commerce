import { useParams } from "react-router-dom";
import useData from "../utils/useData";
import { useState, useEffect } from "react";

const Item = () => {
  const data = useData();
    // console.log(data);
  const [filteredItem, setfilteredItem] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    if (data!==null) {
      const item = data.find((item) => item?.id === itemId);
      setfilteredItem(item);
      console.log(item);
    }
  }, [data, itemId]);
 

  return <div>Item</div>;
};

export default Item;
