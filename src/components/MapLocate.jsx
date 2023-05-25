import React from "react";

const MapLocate = () => {
  return (
    <div>
      <div class=" ">
        <div class="flex  h-[400px] rounded">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=tr&amp;q=Ba%C4%9Fl%C4%B1ca%20Mahallesi,%201226%20Sokak,%20Mimoza%20G%C3%BCven%20Apartman%C4%B1+(Demha%20Medya)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            class="w-full h-full rounded"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapLocate;
