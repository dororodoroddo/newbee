import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { stringify } from 'qs';
import { RoutePath } from '../components/layout/Routes';

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      push(path: RoutePath, params?: any) {
        navigate({ pathname: path, search: params ? stringify(params, { indices: false }) : undefined });
      },
      pop(steps = 1) {
        navigate(-steps);
      },
      replace(path: RoutePath) {
        navigate({ pathname: path }, { replace: true });
      },
    };
  }, [navigate]);
}
