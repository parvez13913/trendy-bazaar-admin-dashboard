import { useGetAllAdminsQuery } from "@/redux/api/admin-api";
import { useDebounced } from "@/redux/hooks";
import { useState } from "react";

const ManageAdmin = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllAdminsQuery({ ...query });
  const admins = data?.admins;
  const meta = data?.meta;
  console.log(admins);

  return (
    <div className="text-black">
      <h1>Manage admin</h1>
    </div>
  );
};

export default ManageAdmin;
