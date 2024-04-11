import React from "react";

interface ICatchAllRoutes {
  params: {
    slugs: string[];
  };
}
const CatchAllRoutes = ({ params }: ICatchAllRoutes) => {
  if (params.slugs?.length === 2) {
    return (
      <div>
        Blog Content Details
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          magni ducimus impedit perferendis, placeat quod dignissimos doloremque
          quaerat inventore veniam eum nam asperiores repellat neque, delectus
          repudiandae nemo odit voluptates?
        </div>
      </div>
    );
  } else if (params.slugs?.length === 1) {
    return (
      <div>
        Number of blogs : 5
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
          optio sapiente minima illo quaerat repellendus officiis, laudantium ex
          accusamus libero maxime ducimus consequuntur ratione, amet
          voluptatibus veniam nisi ipsa.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
          optio sapiente minima illo quaerat repellendus officiis, laudantium ex
          accusamus libero maxime ducimus consequuntur ratione, amet
          voluptatibus veniam nisi ipsa.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
          optio sapiente minima illo quaerat repellendus officiis, laudantium ex
          accusamus libero maxime ducimus consequuntur ratione, amet
          voluptatibus veniam nisi ipsa.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
          optio sapiente minima illo quaerat repellendus officiis, laudantium ex
          accusamus libero maxime ducimus consequuntur ratione, amet
          voluptatibus veniam nisi ipsa.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
          optio sapiente minima illo quaerat repellendus officiis, laudantium ex
          accusamus libero maxime ducimus consequuntur ratione, amet
          voluptatibus veniam nisi ipsa.
        </div>
      </div>
    );
  }
  return <div>Home page of blogs</div>;
};

export default CatchAllRoutes;
