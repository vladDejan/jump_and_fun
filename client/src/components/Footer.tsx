import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterPage = () => {
  return (
    <div className=" h-1/2 w-full ">
      <div className="flex justify-center mb-2 gap-4">
        <Link className="flex" to={"https://www.instagram.com/jump_and_fun_serbia/"} target="_blank">
          <span className="flex text-sm">
            <Instagram />
          </span>
        </Link>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jumpandfunserbia@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className="flex text-sm">
            <Mail />
          </span>
        </a>
      </div>
      <div>
        <p className="text-sm! text-center text-quinary!">
          Izrađeno od ❤️ od strane{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dejanvladimirov@gmail.com"
            className="underline hover:text-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dejan Vladimirov
          </a>
        </p>
        <p className="text-center py-2 text-quinary! text-xs!">© 2025 Jump&Fun. Sva prava zadržana.</p>
      </div>
    </div>
  );
};
