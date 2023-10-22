"use client";
import { EmployeeTable } from "@/components";
import store from "@/context/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <DataProvider>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 gap-6 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <p className="text-3xl font-semibold text-black">MY AYP APP 1.0 🚀</p>

        <div class="relative rounded-lg bg-slate-900 p-2">
          <div class="relative flex text-center">
            <div class="flex pl-3.5 pt-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
            </div>
            <span class="absolute inset-x-0 top-2 text-xs text-slate-500">
              test-assessment.jsx
            </span>
          </div>
          <div class="mt-5 space-y-1.5 px-5 pb-10">
            <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
              <span class="text-slate-500">&lt;</span>
              <span class="text-pink-400">Card</span>
              <span class="text-slate-500">&gt;</span>
            </p>
            <EmployeeTable />

            <p class="font-mono text-xs font-normal tracking-wide text-violet-400">
              <span class="text-slate-500">&lt;/</span>
              <span class="text-pink-400">Card</span>
              <span class="text-slate-500">&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </DataProvider>
  );
};

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default page;
