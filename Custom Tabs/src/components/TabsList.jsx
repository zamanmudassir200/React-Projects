import React from "react";
import Tabs from "./Tabs";

const TabsList = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: "Hey this is tab 1",
    },
    {
      label: "Tab 2",
      content: (
        <div>
          Hey this is tab 2. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Est voluptas labore nihil consequuntur, dicta impedit aliquid
          reiciendis cumque dolore qui doloribus facere culpa saepe doloremque
          non accusamus adipisci debitis dolorem maiores provident eos
          explicabo? Est tempore explicabo nemo voluptatem ea adipisci voluptate
          delectus dignissimos inventore obcaecati. Harum commodi optio
          suscipit, laboriosam inventore at, nemo voluptatum eveniet amet ipsam
          dolor adipisci est eos voluptatem veniam maiores ipsum, sit voluptas
          natus saepe quaerat quisquam. Eos animi quibusdam iusto sint, aliquam
          aut quod eligendi consectetur inventore, quos maxime, pariatur nihil
          corporis voluptas molestias quasi totam. Amet ipsam culpa, deleniti
          placeat exercitationem eligendi ullam obcaecati totam magni non
          temporibus? Fugit non, quasi nemo magnam mollitia molestias ducimus,
          sint quia voluptas odit ullam libero perspiciatis iure officia?
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <div>
          Hey this is tab 3.
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            excepturi maxime ratione officia odio voluptatibus in eos dolorum
            atque vel doloribus quibusdam, rerum quia eveniet itaque sequi
            impedit cupiditate iste esse quas omnis.
          </h1>
        </div>
      ),
    },

    {
      label: "Tab 4",
      content: <h1>Hey this is tab 4</h1>,
    },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <Tabs tabs={tabs} onChange={handleChange} />
    </div>
  );
};

export default TabsList;
