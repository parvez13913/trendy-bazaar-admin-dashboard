import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

import Button from "@/components/Forms/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllAdminsQuery } from "@/redux/api/admin-api";
import { useDebounced } from "@/redux/hooks";
import { IAdmin } from "@/types";

const ManageAdmin = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const query: Record<string, any> = {
    size,
    page,
    sortBy,
    sortOrder,
  };

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data: adminData, isLoading } = useGetAllAdminsQuery({ ...query });

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setSortBy(column);
    setSortOrder(sortDirection);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const admins =
    adminData?.admins &&
    "data" in adminData.admins &&
    Array.isArray(adminData.admins.data)
      ? (adminData.admins.data as IAdmin[])
      : [];

  return (
    <div className="mx-auto p-10 text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Management</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search admins..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email{" "}
                {sortColumn === "email" &&
                  (sortDirection === "asc" ? (
                    <LuChevronUp className="inline" />
                  ) : (
                    <LuChevronDown className="inline" />
                  ))}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("role")}
              >
                Role{" "}
                {sortColumn === "role" &&
                  (sortDirection === "asc" ? (
                    <LuChevronUp className="inline" />
                  ) : (
                    <LuChevronDown className="inline" />
                  ))}
              </TableHead>
              <TableHead>Profile Image</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins.map((admin: any) => (
              <TableRow key={admin.id}>
                <TableCell className="font-medium">{admin.id}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>
                  <img
                    src={
                      admin.profileImage ||
                      "/placeholder.svg?height=40&width=40"
                    }
                    alt={`${admin.email}'s profile`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="h-8 w-8 p-0 bg-primary">
                        <span className="sr-only">Open menu</span>
                        <FiMoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(admin.email)
                        }
                      >
                        Copy email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delete admin</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAdmin;
