import PageHeader from "@/components/PageHeader";

export default function Page() {
    return (
        <div>
            <PageHeader
                h1Text={"Checkout our Pricing"}
                h2Text={"Our Pricing is very simple"}
            />

            <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
                <h3 className="font-bold text-3xl">Free</h3>
                <h4>Free Forever</h4>
            </div>
        </div>
    )
}