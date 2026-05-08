import React from 'react';
import contributorsData from '../../public/contributors.json';

export default function Contributors() {
  const { owner, contributors } = contributorsData;

  return (
    <div className="mb-12 border border-outline-variant bg-surface-container-lowest">
      <div className="px-6 py-5 border-b border-outline-variant bg-surface-container-low">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">group</span>
          <h2 className="font-headline text-xl font-bold tracking-tighter uppercase">Owner & Contributors</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Owner Section */}
          <div className="flex-1">
            <div className="font-mono text-[10px] text-outline uppercase tracking-widest mb-4">Owner</div>
            <div className="flex items-start gap-4 p-5 border-2 border-primary/30 bg-primary/5">
              <img
                src={owner.avatar_url}
                alt={owner.name}
                className="w-16 h-16 rounded-full border-2 border-primary/50"
              />
              <div className="flex-1">
                <div className="font-headline text-lg font-bold text-on-surface">{owner.name}</div>
                <div className="font-mono text-xs text-outline mt-1">
                  <a
                    href={`https://github.com/${owner.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @{owner.username}
                  </a>
                  <span className="text-outline/50 ml-1">// Owner</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-2">{owner.bio}</p>
                {owner.website && (
                  <a
                    href={owner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 font-mono text-[10px] text-tertiary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xs">language</span>
                    {owner.website.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contributors Section */}
          <div className="flex-1">
            <div className="font-mono text-[10px] text-outline uppercase tracking-widest mb-4">Contributors</div>
            {contributors.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {contributors.map((contributor) => (
                  <div
                    key={contributor.username}
                    className="p-3 border border-outline-variant/50 bg-surface hover:border-outline-variant transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="min-w-0">
                        <div className="font-headline text-sm font-bold truncate">{contributor.name}</div>
                        <div className="font-mono text-[9px] text-outline truncate">
                          <a
                            href={`https://github.com/${contributor.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                          >
                            @{contributor.username}
                          </a>
                        </div>
                      </div>
                    </div>
                    {contributor.role && (
                      <div className="font-mono text-[9px] text-tertiary mt-1">{contributor.role}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 border border-dashed border-outline-variant/30 text-center">
                <span className="font-mono text-[10px] text-outline">No contributors yet</span>
                <p className="font-body text-xs text-outline/60 mt-1">Be the first to contribute!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}