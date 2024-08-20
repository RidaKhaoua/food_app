import { GridList } from "@components/Common";
import Loading from "@components/Feedback/Loading/Loading";
import useFoodList from "@hooks/useFoodList";

import FoodItem from "./FoodItem/FoodItem";
import { TFood } from "@types";
import { useState } from "react";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap:"40px",
  rowGap:"30px"
}

function Foods() {
  const { foodList, status, error } = useFoodList();
  

  return (
    <Loading status={status} error={error}>
      <GridList<TFood>
        style={style}
        data={foodList}
        renderData={(item) => <FoodItem {...item} />}
        message="There no Food list"
      />
    </Loading>
  );
}

export default Foods;
