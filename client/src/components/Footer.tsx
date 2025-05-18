import { Instagram, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const FooterPage = () => {
  return (
    <div className=" h-1/2 w-full ">
      <div className="flex justify-center mb-2 gap-4">
        <Link className="flex" to={"https://www.instagram.com/jump_and_fun_serbia/"}>
          <span className="flex text-sm">
            <Instagram />
          </span>
        </Link>
        <Link to={"https://www.instagram.com/jump_and_fun_serbia/"}>
          <span className="flex text-sm">
            <Mail />
          </span>
        </Link>
      </div>
      <div>
        <p className="text-sm! text-center text-quinary!">
          Izrađeno od ❤️ od strane{" "}
          <Link
            to={"mailto:dejanvladimirov@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Dejan Vladimirov
          </Link>
        </p>
        <p className="text-center py-2 text-quinary! text-xs!">© 2025 Jump&Fun. Sva prava zadržana.</p>
      </div>
    </div>
  );
};
