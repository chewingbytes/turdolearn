"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { FilterPanel } from "@/components/filter-panel";
import { PartnerCard } from "@/components/partner-card";
import { MatchModal } from "@/components/match-modal";
import { Pagination } from "@/components/pagination";
import type { Student } from "@/lib/types";
import studentsData from "@/lib/data/students.json";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 6;

export default function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPartner, setSelectedPartner] = useState<Student | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter logic
  const filteredPartners = (studentsData as Student[]).filter((student) => {
    const matchesSearch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.modules.some((m) =>
        m.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesModules =
      selectedModules.length === 0 ||
      student.modules.some((m) => selectedModules.includes(m));

    return matchesSearch && matchesModules;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);
  const paginatedPartners = filteredPartners.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleConnect = (partnerId: string) => {
    const partner = studentsData.find((s) => s.id === partnerId) as Student;
    setSelectedPartner(partner);
    setModalOpen(true);
  };

  const handleSubmitRequest = (message: string) => {
    toast(`Your match request has been sent to ${selectedPartner?.name}.`);
  };

  const handleModuleToggle = (module: string) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((m) => m !== module)
        : [...prev, module]
    );
    setCurrentPage(1);
  };

  const handleAvailabilityToggle = (time: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleReset = () => {
    setSelectedModules([]);
    setSelectedAvailability([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 text-3xl font-bold">Find Study Partners</h1>
            <p className="text-muted-foreground">
              Connect with students who share your courses and learning goals
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name or module..."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <FilterPanel
                selectedModules={selectedModules}
                onModuleToggle={handleModuleToggle}
                selectedAvailability={selectedAvailability}
                onAvailabilityToggle={handleAvailabilityToggle}
                onReset={handleReset}
              />
            </aside>

            <div className="lg:col-span-3">
              {paginatedPartners.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background py-12">
                  <p className="text-muted-foreground">
                    No partners found matching your criteria
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-muted-foreground">
                    Showing {paginatedPartners.length} of{" "}
                    {filteredPartners.length} partners
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {paginatedPartners.map((partner) => (
                      <PartnerCard
                        key={partner.id}
                        partner={partner}
                        onConnect={handleConnect}
                      />
                    ))}
                  </div>
                  {totalPages > 1 && (
                    <div className="mt-8">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <MatchModal
        partner={selectedPartner}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmitRequest}
      />
    </div>
  );
}
