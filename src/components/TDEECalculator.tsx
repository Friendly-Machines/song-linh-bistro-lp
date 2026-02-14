import { useState } from 'react';
import { Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  type Goal,
  type Gender,
  type Rate,
  calculateBMR,
  calculateTDEE,
  calculateGoalCalories,
  calculateDaysToGoal,
} from '../lib/tdee';

type Results = {
  tdee: number;
  bmr: number;
  goalCalories: number;
  daysToGoal: number;
  targetDate: Date;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function NumberStepper({
  id,
  label,
  value,
  unit,
  onChange,
  min = 1,
  max = 300,
  step = 1,
  nextId,
}: {
  id: string;
  label: string;
  value: number;
  unit: string;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  nextId?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditing(true);
    setDraft(String(value));
    requestAnimationFrame(() => e.target.select());
  };

  const handleBlur = () => {
    setEditing(false);
    const parsed = parseInt(draft, 10);
    if (!isNaN(parsed)) {
      onChange(Math.min(max, Math.max(min, parsed)));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (e.target as HTMLInputElement).blur();
      if (nextId) {
        const next = document.getElementById(nextId);
        if (next) next.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 p-3 rounded-2xl border border-cream-dark bg-white">
      <span className="text-xs font-bold text-forest-dark tracking-wider">{label}</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-cream-dark flex items-center justify-center text-stone-light hover:border-forest hover:text-forest transition-colors flex-shrink-0"
        >
          <Minus className="w-3 h-3" />
        </button>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={editing ? draft : value}
          onChange={(e) => setDraft(e.target.value.replace(/[^0-9]/g, ''))}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="text-2xl sm:text-3xl font-bold text-forest-dark w-12 sm:w-16 text-center tabular-nums bg-transparent focus:outline-none"
        />
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-leaf text-leaf flex items-center justify-center hover:bg-leaf hover:text-white transition-colors flex-shrink-0"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
      <span className="text-xs text-stone-light">({unit})</span>
    </div>
  );
}

export default function TDEECalculator() {
  const { t, lang } = useLanguage();

  const [goal, setGoal] = useState<Goal>('lose');
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState(3);
  const [weightChange, setWeightChange] = useState(5);
  const [rate, setRate] = useState<Rate>('normal');
  const [results, setResults] = useState<Results | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);
  const [rateDropdownOpen, setRateDropdownOpen] = useState(false);
  const [weightChangeDraft, setWeightChangeDraft] = useState('');
  const [editingWeightChange, setEditingWeightChange] = useState(false);
  const [weightGoalError, setWeightGoalError] = useState('');

  const activityDescriptions = [
    t('tdee.activity1'),
    t('tdee.activity2'),
    t('tdee.activity3'),
    t('tdee.activity4'),
    t('tdee.activity5'),
  ];

  const goalOptions: { value: Goal; label: string }[] = [
    { value: 'lose', label: t('tdee.goalLose') },
    { value: 'gain', label: t('tdee.goalGain') },
    { value: 'maintain', label: t('tdee.goalMaintain') },
  ];

  const rateOptions: { value: Rate; label: string }[] = [
    { value: 'slow', label: t('tdee.rateSlow') },
    { value: 'normal', label: t('tdee.rateNormal') },
    { value: 'fast', label: t('tdee.rateFast') },
  ];

  const calculate = () => {
    setWeightGoalError('');
    if (goal === 'lose' && weightChange >= weight) {
      setWeightGoalError(t('tdee.weightGoalErrorLose'));
      return;
    }
    if (goal === 'gain' && weightChange <= weight) {
      setWeightGoalError(t('tdee.weightGoalErrorGain'));
      return;
    }

    const bmr = calculateBMR(gender, weight, height, age);
    const tdee = calculateTDEE(bmr, activityLevel);
    const goalCalories = calculateGoalCalories(tdee, goal, rate);
    const daysToGoal = goal === 'maintain' ? 0 : calculateDaysToGoal(tdee, rate, weight, weightChange);

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysToGoal);

    setResults({
      tdee: Math.round(tdee),
      bmr: Math.round(bmr),
      goalCalories: Math.round(goalCalories),
      daysToGoal,
      targetDate,
    });
    setShowResults(true);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const weeksAndDays = (totalDays: number) => {
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    return { weeks, days };
  };

  const buildWhatsAppUrl = () => {
    if (!results) return '#';
    const goalLabel = goal === 'lose' ? t('tdee.goalLose') : goal === 'gain' ? t('tdee.goalGain') : t('tdee.goalMaintain');
    const message = `Hi! I just used your TDEE Calculator. Here are my results:\n\n` +
      `- TDEE: ${results.tdee} cal/day\n` +
      `- BMR: ${results.bmr} cal/day\n` +
      `- Goal (${goalLabel}): ${results.goalCalories} cal/day\n\n` +
      `I'd love to learn more about your personalized meal plans!`;
    return `https://wa.me/84935161988?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="tdee" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark mb-2">
            {t('tdee.title')}
          </h2>
          <p className="text-stone-light text-base sm:text-lg">{t('tdee.subtitle')}</p>
        </div>

        {/* Single card that swaps between input and results */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10 fade-up">
            {!showResults ? (
              /* ──── INPUT FORM ──── */
              <>

                {/* Goal & Gender row */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {/* Goal dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-forest-dark tracking-wider mb-2">
                      {t('tdee.goal')}
                    </label>
                    <div className="relative">
                      <button
                        onClick={() => { setGoalDropdownOpen(!goalDropdownOpen); setRateDropdownOpen(false); }}
                        className="w-full flex items-center justify-between bg-forest text-white font-semibold px-4 py-3 rounded-full transition-colors hover:bg-forest-dark"
                      >
                        <span>{goalOptions.find((o) => o.value === goal)?.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {goalDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-lg border border-cream-dark z-20 overflow-hidden">
                          {goalOptions.map((o) => (
                            <button
                              key={o.value}
                              onClick={() => { setGoal(o.value); setGoalDropdownOpen(false); setWeightGoalError(''); }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-cream ${
                                goal === o.value ? 'text-forest font-semibold bg-cream' : 'text-stone'
                              }`}
                            >
                              {o.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Gender toggle */}
                  <div>
                    <label className="block text-xs font-bold text-forest-dark tracking-wider mb-2">
                      {t('tdee.gender')}
                    </label>
                    <div className="flex rounded-full border border-cream-dark overflow-hidden">
                      <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 text-sm font-semibold transition-all ${
                          gender === 'male'
                            ? 'bg-forest-dark text-white'
                            : 'bg-white text-stone-light hover:bg-cream'
                        }`}
                      >
                        {t('tdee.male')}
                      </button>
                      <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 text-sm font-semibold transition-all ${
                          gender === 'female'
                            ? 'bg-forest-dark text-white'
                            : 'bg-white text-stone-light hover:bg-cream'
                        }`}
                      >
                        {t('tdee.female')}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Age, Height, Weight steppers */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
                  <NumberStepper id="tdee-age" label={t('tdee.age')} value={age} unit={t('tdee.ageUnit')} onChange={setAge} min={10} max={100} nextId="tdee-height" />
                  <NumberStepper id="tdee-height" label={t('tdee.height')} value={height} unit={t('tdee.heightUnit')} onChange={setHeight} min={100} max={250} nextId="tdee-weight" />
                  <NumberStepper id="tdee-weight" label={t('tdee.weight')} value={weight} unit={t('tdee.weightUnit')} onChange={(v) => { setWeight(v); setWeightGoalError(''); }} min={30} max={250} />
                </div>

                {/* Activity level */}
                <div className="mb-8">
                  <label className="block text-xs font-bold text-forest-dark tracking-wider mb-3">
                    {t('tdee.activity')}
                  </label>
                  <div className="flex gap-2 sm:gap-3 mb-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <button
                        key={level}
                        onClick={() => setActivityLevel(level)}
                        className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                          activityLevel === level
                            ? 'border-forest-dark text-forest-dark bg-cream'
                            : 'border-cream-dark text-stone-light hover:border-stone-light'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-amber-600 italic text-center">
                    {activityDescriptions[activityLevel - 1]}
                  </p>
                </div>

                {/* Weight change & Rate (only for lose/gain) */}
                {goal !== 'maintain' && (
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs font-bold text-forest-dark tracking-wider mb-2">
                        {t('tdee.weightChange')}
                      </label>
                      <div className="flex items-center gap-3 p-3 rounded-2xl border border-cream-dark bg-white">
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={editingWeightChange ? weightChangeDraft : weightChange}
                          onChange={(e) => setWeightChangeDraft(e.target.value.replace(/[^0-9]/g, ''))}
                          onFocus={(e) => {
                            setEditingWeightChange(true);
                            setWeightChangeDraft(String(weightChange));
                            requestAnimationFrame(() => e.target.select());
                          }}
                          onBlur={() => {
                            setEditingWeightChange(false);
                            const parsed = parseInt(weightChangeDraft, 10);
                            if (!isNaN(parsed)) {
                              setWeightChange(Math.min(250, Math.max(1, parsed)));
                              setWeightGoalError('');
                            }
                          }}
                          onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
                          className="w-full text-center text-2xl font-bold text-forest-dark focus:outline-none bg-transparent"
                        />
                        <span className="text-sm text-stone-light whitespace-nowrap">({t('tdee.weightUnit')})</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-forest-dark tracking-wider mb-2">
                        {t('tdee.rate')}
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => { setRateDropdownOpen(!rateDropdownOpen); setGoalDropdownOpen(false); }}
                          className="w-full flex items-center justify-between border border-cream-dark px-4 py-3 rounded-2xl text-sm font-semibold text-stone transition-colors hover:border-forest"
                        >
                          <span>{rateOptions.find((o) => o.value === rate)?.label}</span>
                          <ChevronDown className="w-4 h-4 text-stone-light" />
                        </button>
                        {rateDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-lg border border-cream-dark z-20 overflow-hidden">
                            {rateOptions.map((o) => (
                              <button
                                key={o.value}
                                onClick={() => { setRate(o.value); setRateDropdownOpen(false); }}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-cream ${
                                  rate === o.value ? 'text-forest font-semibold bg-cream' : 'text-stone'
                                }`}
                              >
                                {o.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {weightGoalError && (
                  <p className="text-sm text-red-600 text-center -mt-4 mb-4">{weightGoalError}</p>
                )}

                {/* Calculate button */}
                <button
                  onClick={calculate}
                  className="w-full bg-leaf hover:bg-leaf-light text-white font-bold text-lg py-4 rounded-full transition-all hover:shadow-lg hover:shadow-leaf/30"
                >
                  {t('tdee.calculate')}
                </button>
              </>
            ) : results && (
              /* ──── RESULTS VIEW ──── */
              <>
                {/* Back button */}
                <button
                  onClick={() => setShowResults(false)}
                  className="flex items-center gap-2 text-sm font-medium text-stone-light hover:text-forest transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('tdee.backToCalculator')}
                </button>

                {/* Results card inner */}
                <div className="bg-warm rounded-2xl p-6 sm:p-10 mb-8">
                  {/* Main result: what to eat */}
                  <div className="text-center mb-8 pb-8 border-b border-cream-dark">
                    <h3 className="text-sm sm:text-base font-bold text-forest-dark tracking-wider mb-2">
                      {t('tdee.resultGoalLabel')}
                    </h3>
                    <p className="text-5xl sm:text-6xl font-bold text-amber-500 mb-2">
                      {results.goalCalories}
                    </p>
                    <p className="text-sm text-stone-light">{t('tdee.resultGoalHint')}</p>
                  </div>

                  {/* TDEE & BMR side by side as secondary info */}
                  <div className="grid grid-cols-2 gap-4 text-center mb-8">
                    <div>
                      <p className="text-xs font-bold text-forest-dark tracking-wider mb-1">
                        {t('tdee.resultTdeeLabel')}
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                        {results.tdee}
                      </p>
                      <p className="text-xs text-stone-light mt-1">{t('tdee.resultTdeeHint')}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-forest-dark tracking-wider mb-1">
                        {t('tdee.resultBmrLabel')}
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                        {results.bmr}
                      </p>
                      <p className="text-xs text-stone-light mt-1">{t('tdee.resultBmrHint')}</p>
                    </div>
                  </div>

                  {/* Time estimate (only for lose/gain) */}
                  {goal !== 'maintain' && results.daysToGoal > 0 && (
                    <div className="pt-6 border-t border-cream-dark text-center">
                      <p className="text-sm text-leaf mb-2">
                        {goal === 'lose' ? t('tdee.estimatedTimeLose') : t('tdee.estimatedTimeGain')}{' '}
                        {Math.abs(weight - weightChange)}kg
                      </p>
                      <p className="font-display text-xl sm:text-2xl font-bold text-forest-dark mb-2">
                        {formatDate(results.targetDate)}
                      </p>
                      <p className="text-sm text-stone-light">
                        {t('tdee.orAbout')} {weeksAndDays(results.daysToGoal).weeks}{' '}
                        {t('tdee.weeksAndDays')} {weeksAndDays(results.daysToGoal).days}{' '}
                        {t('tdee.fromToday')}
                      </p>
                    </div>
                  )}
                </div>

                {/* WhatsApp CTA */}
                <div className="text-center">
                  <p className="text-stone-light text-sm sm:text-base mb-5 leading-relaxed">
                    {t('tdee.mealplanSubtitle')}
                  </p>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg sm:text-xl py-5 px-8 rounded-full transition-all hover:shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1"
                  >
                    <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                    <span>{t('tdee.mealplanCta')}</span>
                  </a>
                  <p className="text-xs text-stone-light mt-3">
                    {t('tdee.mealplanHint')}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
