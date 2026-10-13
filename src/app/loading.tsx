export default function Loading() {
  return (
    <div className="container page-content" role="status" aria-live="polite">
      <div className="skeleton" />
      <p>در حال دریافت اطلاعات…</p>
    </div>
  );
}
