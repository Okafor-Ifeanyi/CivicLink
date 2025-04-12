import { MailIcon, MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const OfficialCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-col sm:flex-row gap-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src="/icons/education.svg"
            alt="Engr. Adebayo Adelabu"
            width={96}
            height={96}
            className="rounded-full size-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-4 mb-1">
            <h2 className="text-xl font-semibold break-words">
              Engr. Adebayo Adelabu
            </h2>
            <LevelTag level="Federal" />
          </div>
          <p className="text-gray-600 text-sm mb-3 break-words">
            Minister for Electricity and Power, Lagos State.
          </p>
          <p className="text-sm text-gray-700 break-words">
            Dr. Adebayo Adelabu has been the Federal Minister of Power in
            Nigeria since August 21, 2023. He oversees national electricity and
            power affairs, working with commissioners and agencies to improve
            the sector and ensure sustainable energy access across the country.
          </p>

          {/* Contact Details */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Contact Details:</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap items-start gap-2">
                <MapPinIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-medium mr-2">Office Address:</span>
                  <span className="text-gray-600 break-words">
                    Federal Ministry of Power, New Secretariat Complex, Abuja.
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex items-start gap-2">
                  <PhoneIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium mr-2">Hotline:</span>
                    <span className="text-gray-600 break-words">
                      +234 814 012 5530
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MailIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium mr-2">Email Address:</span>
                    <a
                      href="mailto:adebayopowerminister@gmail.com"
                      className="text-blue-600 hover:underline break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      adebayopowerminister@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LevelTag = ({ level }: { level: string }) => {
  const hasLevel = (l: string) => level.toLowerCase().includes(l);

  const variantClassName = hasLevel("federal")
    ? "bg-yellow-100 text-yellow-800"
    : hasLevel("state")
    ? "bg-blue-100 text-blue-800"
    : hasLevel("local")
    ? "bg-green-100 text-green-800"
    : hasLevel("national")
    ? "bg-red-100 text-red-800"
    : "bg-gray-100 text-gray-800";

  return (
    <span
      className={`flex items-center gap-2 px-2 py-1 ${variantClassName} text-xs rounded-lg whitespace-nowrap`}
    >
      <StarIcon className="size-4" />
      {level}
    </span>
  );
};

export default OfficialCard;
