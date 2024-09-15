import UserForm from "@/components/UserForm";

export default async function NewForum() {

    return (
      <main className="w-screen flex flex-col py-40 pb-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="py-6">
          <UserForm/>
          </div>
        </div>
      </main>
    );
}
