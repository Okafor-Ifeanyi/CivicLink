import {
  CopyIcon,
  MailIcon,
  PhoneIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Official } from "../../types/official.type";
import { formatPhoneNumber } from "../../lib/utils";
import { Button } from "../ui/button";
import { toast } from "sonner";

const OfficialCard = ({ official }: { official: Official }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-col sm:flex-row gap-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          {official.image ? (
            <img
              src={official.image}
              alt={official.name}
              width={96}
              height={96}
              className="rounded-full size-full object-cover"
            />
          ) : (
            <div className="rounded-full p-2 overflow-hidden size-full bg-gray-100 animate-pulse">
              <UserIcon className="size-full" />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-4 mb-1">
            <h2 className="text-xl font-semibold break-words">
              {official.name}
            </h2>
            <LevelTag level={official.level} />
          </div>
          <p className="text-gray-600 text-sm mb-3 break-words capitalize">
            {official.position}, {official.jurisdiction}
          </p>
          <p className="text-sm text-gray-700 break-words">
            {official.description}
          </p>

          {/* Contact Details */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Contact Details:</h3>
            <div className="space-y-4">
              {/* TODO: Add office address to backend */}
              {/* <div className="flex flex-wrap items-start gap-2">
                <MapPinIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-medium mr-2">Office Address:</span>
                  <span className="text-gray-600 break-words">
                    Federal Ministry of Power, New Secretariat Complex, Abuja.
                  </span>
                </div>
              </div> */}

              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex items-start gap-2">
                  <PhoneIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                  <span className="font-medium mr-2">Hotline:</span>
                  <span className="text-gray-600 break-words">
                    {formatPhoneNumber(official.phone)}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(official.phone);
                      toast.success("Phone number copied to clipboard");
                    }}
                    className="size-8"
                  >
                    <CopyIcon className="size-4" />
                  </Button>
                </div>
                <div className="flex items-start gap-2">
                  <MailIcon className="size-6 text-gray-500 bg-gray-200 rounded-full p-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium mr-2">Email Address:</span>
                    <a
                      href={`mailto:${official.email}`}
                      className="text-blue-600 hover:underline break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {official.email}
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
      className={`flex items-center gap-2 px-2 py-1 ${variantClassName} text-xs rounded-lg whitespace-nowrap capitalize`}
    >
      <StarIcon className="size-4" />
      {level}
    </span>
  );
};

export const OfficialCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-col sm:flex-row gap-4">
        {/* Profile Image Skeleton */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <div className="rounded-full size-full bg-gray-200 animate-pulse" />
        </div>

        {/* Profile Info Skeleton */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-4 mb-1">
            {/* Name Skeleton */}
            <div className="h-7 bg-gray-200 rounded-md w-48 animate-pulse" />
            {/* Level Tag Skeleton */}
            <div className="h-6 bg-gray-200 rounded-lg w-24 animate-pulse" />
          </div>

          {/* Position Skeleton */}
          <div className="h-5 bg-gray-200 rounded w-72 mb-3 animate-pulse" />

          {/* Description Skeleton - Multiple lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-11/12 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>

          {/* Contact Details Skeleton */}
          <div className="mt-6">
            <div className="h-6 bg-gray-200 rounded w-32 mb-3 animate-pulse" />
            <div className="space-y-4">
              {/* Address Skeleton */}
              <div className="flex flex-wrap items-start gap-2">
                <div className="size-6 bg-gray-200 rounded-full flex-shrink-0 animate-pulse" />
                <div className="flex-1 min-w-0">
                  <div className="h-5 bg-gray-200 rounded w-full animate-pulse" />
                </div>
              </div>

              {/* Phone and Email Skeleton */}
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex items-start gap-2">
                  <div className="size-6 bg-gray-200 rounded-full flex-shrink-0 animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <div className="h-5 bg-gray-200 rounded w-48 animate-pulse" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="size-6 bg-gray-200 rounded-full flex-shrink-0 animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <div className="h-5 bg-gray-200 rounded w-64 animate-pulse" />
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

export default OfficialCard;
