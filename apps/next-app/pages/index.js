import React from "react";
import Button from "@monorepo-starter/button";
const Index = () => {
  return (
    <div>
      <Button isSelected onClick={() => alert("whats up!")}>
        Hello World!
      </Button>
    </div>
  );
};
export default Index;
