import { DesignIcon } from '@/components/ui/design-icon';
import { formatNumber } from '@/lib/format';
export function Syllabus({ count, article = false }: { count: number; article?: boolean }) {
  const firstCount = article ? count : Math.ceil(count / 2);
  const secondCount = article ? count : Math.floor(count / 2);
  return (
    <section className="detail-panel syllabus">
      <h2>
        <DesignIcon name="info-calendar" />
        {article ? 'سرفصل‌های این مقاله' : 'سرفصل‌ها'}
      </h2>
      <details className="syllabus-group">
        <summary>
          سرفصل اول{' '}
          <span>
            {formatNumber(firstCount)} {article ? 'موضوع' : 'جلسه'} ⌄
          </span>
        </summary>
        <div>
          {Array.from({ length: firstCount }, (_, i) => (
            <div className="syllabus-row" key={i}>
              <span className="lesson-number">{formatNumber(i + 1)}</span>
              <DesignIcon name="lesson" />
              <span>
                {i === 0
                  ? 'معرفی دوره'
                  : i % 2
                    ? 'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف'
                    : 'نقش حجاب و عفاف'}
              </span>
              {!article ? <small>۱۸:۲۵</small> : null}
            </div>
          ))}
        </div>
      </details>
      <details className="syllabus-group" open>
        <summary>
          سرفصل دوم{' '}
          <span>
            {formatNumber(secondCount)} {article ? 'موضوع' : 'جلسه'} ⌃
          </span>
        </summary>
        <div>
          {Array.from({ length: secondCount }, (_, i) => (
            <div className="syllabus-row" key={i}>
              <span className="lesson-number">
                {formatNumber(article ? i + 1 : firstCount + i + 1)}
              </span>
              <DesignIcon name="lesson" />
              <span>
                {i === 0
                  ? 'معرفی دوره'
                  : i % 2
                    ? 'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف'
                    : 'نقش حجاب و عفاف'}
              </span>
              {!article ? <small>۱۸:۲۵</small> : null}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
