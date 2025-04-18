import {
  Category,
  Official,
  OfficialFieldFilter,
} from "../../types/official.type";
import { useOfficials } from "../../services/hooks/use-official";
import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import nigerianPeople from "@/assets/7e5bcd5f5459137f6d4e984c8372c605.jpeg";

const SearchOfficials: React.FC<{
  filters: OfficialFieldFilter;
  category: Category | undefined;
}> = ({ filters, category }) => {
  const { officials, isOfficialsLoading, officialsError } =
    useOfficials(filters);

  const officialBanner = filters.category && (
    <div className="relative sm:w-[90%] overflow-hidden h-75 mx-auto flex flex-col justify-center items-center rounded-xl">
      <img
        src={category?.image ?? nigerianPeople}
        alt={`${category?.name} officals image`}
        className="object-cover -z-10 size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <h2 className="text-white text-4xl font-bold z-10 capitalize">
        {category?.name}
      </h2>
    </div>
  );

  if (isOfficialsLoading) {
    return (
      <div className="contact-list">
        {officialBanner}
        {[...Array(3)].map((_, index) => (
          <ProfileCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (officialsError) {
    return (
      <div className="contact-list">
        {officialBanner}
        <div className="flex justify-center items-center">
          <p>Error fetching officials: {officialsError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-list">
      {officialBanner}
      {officials?.map((official) => (
        <ProfileCard key={official._id} {...official} />
      ))}
    </div>
  );
};

const ProfileCardSkeleton = () => {
  return (
    <div className="profile-card">
      <div className="drs">
        {/* Image skeleton */}
        <div className="size-20 rounded-full bg-gray-200 animate-pulse" />

        <div className="name-details">
          {/* Name skeleton */}
          <div className="h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse" />

          {/* Title skeleton */}
          <div className="h-4 bg-gray-200 rounded w-48 mb-4 animate-pulse" />

          {/* Data rows skeleton */}
          <div className="profile-card__data space-y-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="profile-card__row flex items-center gap-2"
              >
                {/* Key skeleton */}
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                {/* Value skeleton */}
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse ml-auto" />
      </div>

      {/* Button skeleton */}
      <div className="view-contact h-10 bg-gray-200 rounded animate-pulse" />
    </div>
  );
};

const ProfileCard: React.FC<Official> = ({ image, name, position, level }) => {
  return (
    <div className="profile-card">
      <div className="drs">
        {image ? (
          <img
            src={image}
            alt="Engr. Adebayo Adelabu"
            width={96}
            height={96}
            className="profile-card__image"
          />
        ) : (
          <div className="profile-card__image size-24 rounded-full p-2 overflow-hidden bg-gray-100 animate-pulse">
            <UserIcon className="size-full" />
          </div>
        )}
        <div className="name-details">
          <h2 className="profile-card__name">{name}</h2>
          <p className="profile-card__title capitalize">{position}</p>
          <div className="profile-card__data">
            <div className="profile-card__row">
              <span className="profile-card__key font-bold">
                Government Level:{" "}
              </span>
              <span className="profile-card__value capitalize">{level}</span>
            </div>
          </div>
        </div>
      </div>

      <Button className="view-contact">View Contact</Button>
    </div>
  );
};

export default SearchOfficials;
